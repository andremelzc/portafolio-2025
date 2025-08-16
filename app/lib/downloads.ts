/**
 * Downloads a file from the public directory
 * @param filePath - Path to file in public directory (e.g., '/cv-andre.pdf')
 * @param fileName - Name for the downloaded file (e.g., 'CV-Andre-Melendez.pdf')
 */
export const downloadFile = (filePath: string, fileName: string) => {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  link.click();
};

/**
 * Downloads CV file specifically
 */
export const downloadCV = () => {
  downloadFile('/cv_andre_melendez_english.pdf', 'CV-Andre-Melendez-Cava.pdf');
};

/**
 * Downloads CV in Spanish
 */
export const downloadCVSpanish = () => {
  downloadFile('/cv_andre_melendez_español.pdf', 'CV-Andre-Melendez-Cava-ES.pdf');
};
