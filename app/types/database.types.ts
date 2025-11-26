// types/database.types.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      dates: {
        Row: {
          calendar: Json;
          era: string;
          year: number;
          month: number;
          day: number;
        };
        Insert: {
          calendar?: Json;
          era?: string;
          year: number;
          month: number;
        };
        Update: {
          calendar?: Json;
          era?: string;
          year?: number;
          month?: number;
          day?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
