import { Request } from "express";

export const normalizeQuery = (query: Request['query']): { [key: string]: string } => {
    const result = Object.entries(query).reduce((acc, [key, value]) => {
      if (typeof value === 'string') {
        return { ...acc, [key]: value };
      } else if (Array.isArray(value)) {
        return { ...acc, [key]: value[0] };
      } else {
        return { ...acc, [key]: JSON.stringify(value) };
      }
    }, {});
    return result;
};