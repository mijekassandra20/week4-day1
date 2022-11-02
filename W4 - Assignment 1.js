// TODO: 1. Please list and explain in 1-2 sentences of the top 10 OWASP risks. 
    //? 1. Broken Access Control 
        // It is designed to prevent users from doing actions beyond what they are permitted to do.
        // This allows attackers to steal informations to steal from other users, modify data and do actions as other users.

    //? 2. Cryptographic Failures
        // Is a security vulnerability of web application that exposes sensitive data on a weak cryptographic algorithm(weak hashed passwords).
        // To prevent this, when encrypting data, make sure to use strong and up-to-date cryptographic algorithm.

    //? 3. Injection
        // Enables attackers to injects malicious commands to your code. Sensitive information will then be accessible to them. 
        // This allows attackers to bypass and modify the records in your database. 

    //? 4. Insecure Design
        // Occurs when security controls and designs were not being properly integrated during the development phase of your project.

    //? 5. Security Misconfiguration
        // This occurs when important security settings are not being implemented during development or implemented incorrectly.
        // This leaves your web application being vulnerable to cyber attacks or breach.

    //? 6. Vulnerable and Outdated Compomonents
        // This is when packages, libraries, modules or other components used for your code are already out-of-date and are no longer maintained.

    //? 7. Identification and Authentication Failures
        // Failure to identification and authentication may occur because important user authentication are not correctly and properly protected by an application.
        // This may lead to passwords, keys or tokens being easily compromised by the attackers.

    //? 8. Software and Data Integrity
        // Multiple threats may arise when an when an application does not practice and apply proper verification and authentication.
        // Ensure that the apps or libraries/packages being used are from trusted repositories or sources.

    //? 9. Security Logging and Monitoring Failures
        // Without logging and monitoring, breaches cannot be detected. It is important to have these closely monitored to keep track of the logs,
        // and give alerts if there are any mulfunctions or errors that might happen. If left unnoticed, then it may cause a problem to your application.  

    //? 10. Server Side Request Forgery (SSRF)
        // This occurs when a web application is retrieving from a unknown source or domain without checking and validating the user supplied URL.
        // Your server gets compromised wherein attackers takes advantage of the vulnerability on your server and use it against user server, therefore,
        // allowing the attackers to steal sensitive information or worse, bringing down your entire web application.  

// TODO: 2. In 2-3 sentences, please explain what NoSQL Injection is and a solution.
    // It is when attackers inject a code that will overwrite your code. This occurs when a query or input from a user is not sanitized,
    // allowing the attacker to inject a malicous input, making your database and server vulnerable to attacks or modifications. 
    // In order to prevent this, a npm package called 'express-mongo-sanitized' can be installed, in which it will searched a $ in your code,
    // and replace it with any other special character or keys.

// TODO: 3. In 2-3 sentences, please explain what cross site scripting is and a solution. 
    // Cross site scripting occurs when attackers send script-injecting link to victims through emails. When a victim gets fooled and clicked on the link,
    // it will execute a malicious script that exposes the victim's private data, (e.g bank acc details), then it send the private data to the attacker.
    // In order to prevent this, a npm package called, 'xss-clean' can be installed, this will sanitize user inputs from POST, GET queries and  GET params.

// TODO: 4. In 2-3 sentences, please explain what rate limiting is and a solution. 
    // Rate limiting is when a user is sending too many api request to try out combinations of username/email and passwords in order to successfully logged in.
    // This prevents any malicious bot activity done in your web application.
    // In order to prevent this, a npm package called, 'express-rate-limit', this allows you to limit repeated requests to public APIs/

// TODO: 5. In 2-3 sentences, please explain what CORS is and a solution. 
    // CORS or Cross Origin Resource sharing is an HTTP header based mechanism that allows a server to permit another domain to access its server.
    // This allows cross-origin request and transfer of data between browsers and servers.
    // Without CORS, browsers with different domains cannot access another server. To allow this, use whitelist and wildcard, wherein you can allow
    // resricted resources to access to another domain. Install npm package called, 'cors'.

