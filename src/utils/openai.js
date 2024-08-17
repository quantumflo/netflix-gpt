import OpenAI from 'openai';

/**
 * OpenAI GPT-3 API client
 */
export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_GPT_API_KEY, 
  dangerouslyAllowBrowser: true,

});