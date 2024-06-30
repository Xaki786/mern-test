# mern-test
## frontend
Inside frontend directory, run the following commands to start the project:
```
npm install
npm run dev
```
## Backend
Inside server directory, run the following commands to start the project:
```
npm install
npm start
```
---

## Documentation
#### Node / React Assignment Submission 

#### React

| Provided Script | Changes | Improvement/Fix niche |
|-----------------|---------|------------------------|
| Code was in React class-based components which is an old way of writing React applications | Changed it to Functional components approach for latest react features | Maintainability, Readability, Modularity |
| UI was hard for user to view and submit the form | Changed it to responsive beautiful UI. Also added a progress bar instead of just showing form completion percentage number | User satisfaction |
| All the state was in a single file which makes code hard to read and maintain | Created a custom hook for form state handling to make it reusable and more readable | Maintainability, Readability, Modularity |
| There was no loading/success state of the form submission | Added these states | User satisfaction |
| Percentage of form being filled was calculated after certain interval | Changed it to be triggered based on any state change instead of interval which improved performance | Performance |
| Two unnecessary state variables which can be computed at run time .i.e filled percentage and missing fields. | Changed the implementation to compute them runtime | Performance |
| Single input field was repeated multiple times with the same functionality which can lead to bugs which are hard to fix | Changed it to single component to be used multiple times with simple props | Maintainability, Readability, Modularity |
| API submission logic was inside the main component | Extracted it to another file for better code clarity | Readability |
| Backend URI was exposed inside Network request tab | Used vite proxy server to hide this information | Security |
| All the code was inside single file which is harder to maintain and reuse | Made modular files based on UI / hooks / API etc | Maintainability, Modularity |
| PropTypes were missing in the provided form | Added PropTypes for better dev experience, types prediction, validation, and code maintainability | Maintainability |

##### Further Improvements which can be made:

- Auth implementation for safety of data
- HTTPS implementation for encryption of data being transferred from Frontend to Backend
- Validations for form handling before submitting it
- Different input types for different types of fields e.g. date, number, etc.
- Better state (error/success) handling on form submission
- TypeScript for more maintainable code

#### Node

| Provided Script | Changes | Category |
|-----------------|---------|----------|
| All the code was inside single file which is harder to maintain | Made modular files based on routes / controllers / services etc | Maintainability, Modularity |
| Request body was not sanitized; user can inject various attacks in the requests such as SQL / NoSQL injections etc | Added a middleware for handling and removing any malicious code added by user | Security |
| There were different validation checks at random positions which made no sense | Refactored these checks based on a fast fail strategy. Most useless information check is at the top and request is failed early | Performance |
| Checking if there are some missing fields in the request was inside the route handler | Moved it to validation middleware for removing extra code from route handler | Performance, Modularity |
| Sensitive information was present inside the code which is dangerous and hard to change based on environments. | Moved it to env for security and easy deployments | Security, Deployment, Maintainability |
| Code was tightly coupled | Moved it to various layers such as routes, controllers, middlewares, services, etc | Maintainability, Modularity, Readability, Scalability |
| Data to be saved was unencrypted which can cause violation of user privacy e.g., a Developer / cloud provider / compromised server can expose the user information | Made credit card numbers encrypted to avoid such calamities. Other fields can also be encrypted for safety manner i.e., CVC and date etc | Security |
| Initially data was being saved into a file which is hard to scale/maintain | Wrote database service using Mongo to handle persistent data | Scalability, Availability |
| Response from third party credit card verification API was slow | Used in-memory cache to store responses which are directly sent to user if previous credit card number was used for verification which made huge performance gain. Cache refreshes after a certain duration | Performance, Availability |
| Initially responses were sent in text format which is hard to scale and parse for different types of clients such as mobile app for same backend API | Converted responses to JSON format for better scalability and parsing | Performance, Scalability |

##### Further Improvements which can be made:

- Check for whether the same credit card number already exists
- TypeScript for more maintainable code
- Constants for routes / error handling
- Validator like Zod can be used
- Use Redis or some other production-ready scalable solution
