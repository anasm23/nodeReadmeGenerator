// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.name}
    
    # DESCRIPTION
    ${data.desc}
    
    # TABLE OF CONTENTS
    ${data.toc}

    #INSTALL
    ${data.install}

    #LICENSE
    ${data.license}

    #CONTRIBUTORS
    ${data.cont}

    #TESTS
    ${data.desc}

    #QUESTIONS
    ${data.q}
  `;
  }
  
  module.exports = generateMarkdown;
  