export function handleApiError(error: any) {
  if (error.response) {
    console.error("API Error:", error.response.data?.message || error.message);
    return error.response.data?.message || "Something went wrong!";
  }
  return "Network error. Please try again.";
}