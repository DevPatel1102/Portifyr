import React from 'react';

export const downloadPortfolio = (portfolio, selectedTemplate) => {
    alert("We're preparing your portfolio for download. Your browser will prompt you to save the file in a moment.");

    // Helper function to render Professional template HTML
    const renderProfessionalHTML = () => {
        return `
      <div class="text-center mb-8">
        <img src="${portfolio.image}" alt="${portfolio.name}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg">
        
        <h1 class="text-3xl font-bold mb-2" style="color: ${portfolio.nameColor}">
          ${portfolio.name}
        </h1>
        
        <h2 class="text-xl mb-4" style="color: ${portfolio.secondaryColor}">
          ${portfolio.title}
        </h2>
        
        <p class="text-gray-700 mb-6">
          ${portfolio.bio}
        </p>
        
        <div class="flex justify-center space-x-4 mb-8">
          <a href="https://${portfolio.social.github}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors">
            <i class="fab fa-github text-xl"></i>
          </a>
          <a href="https://${portfolio.social.linkedin}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors">
            <i class="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://${portfolio.social.twitter}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors">
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a href="mailto:${portfolio.social.email}" class="text-gray-600 hover:text-gray-900 transition-colors">
            <i class="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
      
      <div class="space-y-8">
        <section>
          <div class="flex items-center mb-4">
            <i class="fas fa-code mr-2 text-xl" style="color: ${portfolio.primaryColor}"></i>
            <h2 class="text-xl font-bold" style="color: ${portfolio.primaryColor}">Skills</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${portfolio.skills.map(skill => `
              <div class="border rounded-lg p-4 shadow-sm">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">${skill.name}</span>
                  <span class="text-sm font-semibold" style="color: ${portfolio.primaryColor}">${skill.level}%</span>
                </div>
                <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="skill-bar h-full rounded-full" style="--level: ${skill.level}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
        
        <section>
          <div class="flex items-center mb-4">
            <i class="fas fa-briefcase mr-2 text-xl" style="color: ${portfolio.primaryColor}"></i>
            <h2 class="text-xl font-bold" style="color: ${portfolio.primaryColor}">Projects</h2>
          </div>
          <div class="grid grid-cols-1 gap-4">
            ${portfolio.projects.map(project => `
              <div class="border rounded-lg overflow-hidden shadow-sm">
                <div class="md:flex">
                  <div class="md:w-1/3">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                  </div>
                  <div class="p-4 md:w-2/3">
                    <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center" style="color: ${portfolio.primaryColor}">
                      View Project
                      <i class="fas fa-external-link-alt ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
        
        <section>
          <div class="flex items-center mb-4">
            <i class="fas fa-award mr-2 text-xl" style="color: ${portfolio.primaryColor}"></i>
            <h2 class="text-xl font-bold" style="color: ${portfolio.primaryColor}">Experience</h2>
          </div>
          <div class="space-y-4">
            ${portfolio.experience.map(exp => `
              <div class="border rounded-lg p-4 shadow-sm">
                <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 class="text-lg font-semibold">${exp.position}</h3>
                  <span class="text-sm text-gray-500">${exp.duration}</span>
                </div>
                <div class="text-base mb-2" style="color: ${portfolio.secondaryColor}">${exp.company}</div>
                <p class="text-gray-600">${exp.description}</p>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    `;
    };

    // Helper function to render Modern template HTML
    const renderModernHTML = () => {
        return `
    <div class="mx-auto border rounded-xl overflow-hidden">
      <div class="relative mb-12">
        <div class="header-bg absolute top-0 left-0 right-0"></div>
        <div class="relative pt-28 px-6 pb-6 flex flex-col md:flex-row gap-8 items-center md:items-end">
          <img src="${portfolio.image}" alt="${portfolio.name}" class="w-36 h-36 rounded-xl object-cover border-4 border-white shadow-xl relative z-10">
          <div class="text-center md:text-left z-10">
            <h1 class="text-4xl font-bold mb-1 text-white md:text-gray-800" style="color: ${portfolio.nameColor}">
              ${portfolio.name}
            </h1>
            <div class="px-3 py-1 inline-block rounded-full text-sm mb-3 text-white" style="background-color: ${portfolio.accentColor}">
              ${portfolio.title}
            </div>
            <div class="flex justify-center md:justify-start space-x-3 mt-2">
              <a href="https://${portfolio.social.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-sm" style="color: ${portfolio.secondaryColor}">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://${portfolio.social.linkedin}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-gray-100 transition-colors" style="color: ${portfolio.secondaryColor}">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://${portfolio.social.twitter}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-gray-100 transition-colors" style="color: ${portfolio.secondaryColor}">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="mailto:${portfolio.social.email}" class="p-2 rounded-full hover:bg-gray-100 transition-colors" style="color: ${portfolio.secondaryColor}">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="px-6 py-4">
          <p class="text-gray-700 leading-relaxed">${portfolio.bio}</p>
        </div>
      </div>
  
      <div class="space-y-12 px-6">
        <section>
          <h2 class="text-2xl font-bold relative pb-2 mb-6 inline-block" style="color: ${portfolio.primaryColor}">
            Skills
            <span class="accent-bar absolute bottom-0 left-0"></span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${portfolio.skills.map(skill => `
              <div class="bg-white rounded-xl shadow-sm p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">${skill.name}</span>
                  <span class="font-bold text-sm px-2 py-1 rounded" style="background-color: ${portfolio.accentColor}; color: white;">
                    ${skill.level}%
                  </span>
                </div>
                <div class="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full rounded-full" style="width: ${skill.level}%; background-color: ${portfolio.primaryColor};"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
  
        <section>
          <h2 class="text-2xl font-bold relative pb-2 mb-6 inline-block" style="color: ${portfolio.primaryColor}">
            Projects
            <span class="accent-bar absolute bottom-0 left-0"></span>
          </h2>
          <div class="grid grid-cols-1 gap-6">
            ${portfolio.projects.map(project => `
              <div class="bg-white rounded-xl overflow-hidden shadow-md">
                <div class="md:flex">
                  <div class="md:w-2/5">
                    <img src="${project.image}" alt="${project.title}" class="h-48 w-full object-cover">
                  </div>
                  <div class="p-6 md:w-3/5">
                    <h3 class="font-bold text-xl mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <a 
                      href="${project.link}" 
                      target="_blank" 
                      class="inline-flex items-center px-4 py-2 rounded-lg text-white"
                      style="background-color: ${portfolio.accentColor};"
                    >
                      View Project <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
  
        <section>
          <h2 class="text-2xl font-bold relative pb-2 mb-6 inline-block" style="color: ${portfolio.primaryColor}">
            Experience
            <span class="accent-bar absolute bottom-0 left-0"></span>
          </h2>
          <div class="space-y-6">
            ${portfolio.experience.map((exp, i) => `
              <div class="relative pl-8 ${i !== portfolio.experience.length - 1 ? 'pb-8' : ''}">
                ${i !== portfolio.experience.length - 1 ? `
                  <div class="absolute top-0 left-3 bottom-0 w-0.5" style="background-color: ${portfolio.accentColor};"></div>
                ` : ''}
                <div class="absolute top-0 left-0 w-6 h-6 rounded-full" style="background-color: ${portfolio.primaryColor};"></div>
                <div class="bg-white rounded-xl shadow-sm p-5">
                  <div class="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 class="font-bold text-lg">${exp.position}</h3>
                    <span class="text-sm py-1 px-3 rounded-full bg-gray-100">${exp.duration}</span>
                  </div>
                  <h4 class="text-base mb-3" style="color: ${portfolio.secondaryColor};">${exp.company}</h4>
                  <p class="text-gray-600">${exp.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    </div>
    `;
    };

    const content = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolio.name} - Portfolio</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
      body {
        background-color: ${portfolio.backgroundColor};
        color: ${portfolio.textColor};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      .skill-bar {
        background: linear-gradient(to right, ${portfolio.primaryColor} var(--level), #e5e7eb var(--level), #e5e7eb 100%);
      }
      .template-container {
        max-width: 1024px;
        margin: 0 auto;
        padding: 2rem;
      }
      ${selectedTemplate === 'modern' ? `
      .header-bg {
        background-color: ${portfolio.primaryColor};
        height: 12rem;
        border-radius: 0.75rem 0.75rem 0 0;
      }
      .accent-bar {
        background-color: ${portfolio.accentColor};
        height: 0.25rem;
        width: 50%;
        border-radius: 0.25rem;
      }
      ` : ''}
    </style>
  </head>
  <body>
    <div class="template-container">
      ${selectedTemplate === 'professional' ? renderProfessionalHTML() : renderModernHTML()}
    </div>
  </body>
  </html>
  `;

    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolio.name.replace(/\s+/g, '-').toLowerCase()}-portfolio.html`;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
        alert("Your portfolio HTML has been downloaded. To convert it to PDF:\n\n1. Open the HTML file in your browser\n2. Use your browser's print function (Ctrl+P or Cmd+P)\n3. Select 'Save as PDF' as the destination\n4. Click Save");
    }, 1000);
};

const DownloadPortfolioButton = ({ portfolio, selectedTemplate, buttonText = 'Download Portfolio' }) => {
    const handleDownload = () => {
        downloadPortfolio(portfolio, selectedTemplate);
    };

    return (
        <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-colors"
        >
            {buttonText}
        </button>
    );
};

export default DownloadPortfolioButton;