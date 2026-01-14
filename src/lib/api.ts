import axios from 'axios';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Types for API responses
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  experience: string;
}

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// API Functions

/**
 * Submit contact form data
 * This can be integrated with Salesforce (SFDC) or any other CRM
 */
export const submitContactForm = async (
  formData: ContactFormData
): Promise<ApiResponse<{ id: string }>> => {
  try {
    const response = await apiClient.post('/contact', formData);
    return {
      success: true,
      data: response.data,
      message: 'Form submitted successfully',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'Failed to submit form. Please try again.',
    };
  }
};

/**
 * Submit registration form
 * Can be connected to SFDC Lead object
 */
export const submitRegistration = async (
  formData: RegistrationFormData
): Promise<ApiResponse<{ leadId: string }>> => {
  try {
    const response = await apiClient.post('/registration', formData);
    return {
      success: true,
      data: response.data,
      message: 'Registration successful',
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      error: 'Failed to register. Please try again.',
    };
  }
};

/**
 * Fetch weather data for the location widget
 */
export const fetchWeatherData = async (
  location: string = 'Hunter Valley'
): Promise<ApiResponse<WeatherData>> => {
  try {
    // Example using a weather API
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}`
    );

    if (!response.ok) {
      throw new Error('Weather API error');
    }

    const data = await response.json();

    return {
      success: true,
      data: {
        location: data.location.name,
        temperature: Math.round(data.current.temp_c),
        condition: data.current.condition.text,
        humidity: data.current.humidity,
      },
    };
  } catch (error) {
    console.error('Weather fetch error:', error);
    // Return default data on error
    return {
      success: false,
      data: {
        location: 'Hunter Valley',
        temperature: 19,
        condition: 'Sunny',
        humidity: 65,
      },
      error: 'Could not fetch weather data',
    };
  }
};

/**
 * Salesforce (SFDC) API integration example
 * Note: In production, SFDC calls should go through a backend server
 * to protect credentials
 */
export const createSalesforceLeadExample = async (leadData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
}) => {
  // This is a conceptual example
  // In production, you would:
  // 1. Call your backend API
  // 2. Backend authenticates with Salesforce using OAuth 2.0
  // 3. Backend creates the Lead in Salesforce
  // 4. Returns the Lead ID

  try {
    const response = await apiClient.post('/sfdc/lead', leadData);
    return {
      success: true,
      leadId: response.data.id,
    };
  } catch (error) {
    console.error('SFDC Lead creation error:', error);
    return {
      success: false,
      error: 'Failed to create lead',
    };
  }
};

// Using Next.js API routes for server-side API calls
// This is the recommended approach for secure API integrations

/**
 * Example of calling a Next.js API route
 */
export const callNextApiRoute = async (endpoint: string, data: object) => {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API route error (${endpoint}):`, error);
    throw error;
  }
};

export default apiClient;
