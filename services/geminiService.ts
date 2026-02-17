
import { GoogleGenAI, Type } from "@google/genai";
import { AIQuoteResponse } from "../types";

// This service is currently disabled in favor of a local deterministic calculator 
// to satisfy the user request for a "real/normal calculator".
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIQuote = async (areaSize: number, serviceType: string, extras: string[]): Promise<AIQuoteResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Calculate a cleaning plan and price for a ${areaSize} sqm ${serviceType} cleaning. Selected extras: ${extras.join(", ")}.`,
      config: {
        systemInstruction: "You are a professional cleaning service estimator in Turkey. Provide estimates in Turkish Lira (TL). Return output in JSON format only.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            planName: { type: Type.STRING },
            estimatedPrice: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["planName", "estimatedPrice", "recommendations"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response");
    return JSON.parse(text);
  } catch (error) {
    return {
      planName: "Standart Paket",
      estimatedPrice: "Fiyat Alın",
      recommendations: ["İletişime geçiniz."]
    };
  }
};
