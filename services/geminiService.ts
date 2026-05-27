/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (Starting at $${p.price}): ${p.description}. Features included: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the AI Operations Specialist for "SDA Building Services", a premier condominium and commercial property maintenance group.
  Your tone is highly professional, reliable, organized, and reassuring. Focus on engineering standards, structural aesthetics, and resident safety.
  
  Here is our 4-Week Premium Spring Refresh Program and service catalog:
  ${productContext}
  
  Our 4-Week Implementation Roadmap is structured as:
  - Week 1: Exterior Restoration Campaign (Garage turbo powerwashing to remove winter salts/sand/oil, specialized height-access window cleaning, perimeter landscaping cleanup).
  - Week 2: Facilities & Amenities Optimization (Communal changerooms/locker rooms industrial sanitation, pool deck tile scrub, rubbish chute pressurized steam sanitization, individual suite balcony washes).
  - Week 3: Deep Interior Structural Cleaning (High-altitude dusting for lobbies and chandeliers, hallway carpet steam extraction, clearing locker storages).
  - Week 4: Final Finishes & Technical Maintenance (Drywall repairs and corridor matching point paint, mechanical floor strip & wax, plumbing and drain flushing, electrical upkeep).
  
  Answer customer questions about specifications, roadmap execution, scheduling coordination, and budget estimates. Keep answers concise (under 4 sentences) to fit nicely in the chat UI. Encourage them to add services to their Quote Cart and submit a Reservation Intake.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our archives at the moment.";
  }
};