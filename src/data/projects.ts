export interface Project {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  github: string;
  live?: string;
}

export const projects: Project[] = [
{
  title: "LungDetect",
  subtitle: "Ensemble Deep Learning on Medical Imaging",
  image: "/images/lung-cancer.jpg",
  github: "https://github.com/Azazftb/lung-detect-CT",
  tech: ["Python", "TensorFlow", "Keras", "CNN", "VGG16", "VGG19", "AlexNet", "AUC", "F1 Score"],
  description: `
  Lung Cancer Detection Using CT Scans
  
A machine learning project focused on detecting lung cancer using CT scan images.

✅ Preprocessing: Histogram Equalization, Lung Segmentation, Image Normalization  
✅ Models: VGG16, VGG19, AlexNet, Custom CNN  
✅ Evaluation: Accuracy, Precision, Recall, AUC, F1 Score  
✅ Ensemble: Majority Voting for final prediction.
`,
}

,
{
  title: "Economic Pulse",
  subtitle: "Visualizing Sectoral Trends Post-Crisis",
  image: "/images/economic-pulse.jpg", // Make sure you add this image!
  github: "https://github.com/Azazftb/Econmic-Developement",
  tech: ["Python", "Jupyter Notebook", "Matplotlib", "Plotly", "Data Visualization"],
  description: `
Economic Pulse: Employment Shifts in Canada

A data visualization project showing and analyzing employment trends across Canadian sectors from 2006–2023.

✅ Explored sectoral shifts in response to:
• 2008 Global Financial Crisis  
• 2020 COVID-19 Pandemic  

✅ Tools & Process:
• Data Cleaning and Wrangling in Python  
• Interactive & static visualizations using Matplotlib and Plotly  
• Notebook sections: Introduction, Approach, Visualization & Insight Analysis
`,
  },
{
  title: "D2L++ ",
  subtitle: "Chrome Extension for Brightspace Productivity",
  image: "/images/d2lpp-extension.png", // Add this screenshot to public/images/
  github: "https://github.com/Azazftb/D2L_PP",
  live: "https://chromewebstore.google.com/detail/d2l++/ldfpkhphkekoooibkdphjpdcmckbhpha",
  tech: ["JavaScript", "HTML", "CSS", "Chrome Extension"],
  description: `
  D2L++ – LMS Enhancement Extension
  
A Chrome extension designed to enhance the Brightspace LMS experience, with over 2,000 active users in the first month.

✅ Features:
• Dark Mode with multiple themes  
• Full-width mode for immersive layouts  
• Logo replacement and UI customization  
• Banner brightness control and banner removal  
• Multi-institution support across D2L platforms  

✅ Tools:
• Written using HTML, CSS, and JavaScript  
• Published on the Chrome Web Store
`,
},
{
  title: "TCHKPK",
  subtitle: "Responsive Web Development for Local Healthcare",
  image: "/images/tchkpk-website.jpg", // Add your screenshot here
  github: "", // Contract work, no public repo
  live: "https://tchkpk.com/",
  tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Accessibility"],
  description: `
  TCHKPK: Hospital Website
A responsive and accessible website developed for a hospital in Khyber Pakhtunkhwa, Pakistan. Worked as a contractor to deliver a user-friendly interface.

✅ Project Goals:
• Provide accessible medical info and appointment booking  
• Serve local communities with bilingual support
• Ensure compatibility across all devices  

✅ Tech:
• HTML, CSS, and JavaScript with responsive layout  
• Optimized for performance and accessibility
`,
}
,
];
