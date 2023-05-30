### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  a json web token used for auth and session
- What is the signature portion of the JWT?  What does it do?
  ensures that it was siged by your server
- If a JWT is intercepted, can the attacker see what's inside the payload?
  yes, its a basic encryption
- How can you implement authentication with a JWT?  Describe how it works at a high level.
  sign a jwt on signup and login, then validate it in each request
- Compare and contrast unit, integration and end-to-end tests.
  unit is smaller, more function based tests, integreation has multiple more parts movin g, end to end is the pretty much the whole app
- What is a mock? What are some things you would mock?
  a fake and controlled object, to replace unpredictible things like apis
- What is continuous integration?
  pushing code frequently so you can catch bugs right away
- What is an environment variable and what are they used for?
  variable in the sysmtem enviorment, can be used for important and secret keys, configurations etc
- What is TDD? What are some benefits and drawbacks?
  testing driven development, safer code, slower dev time
- What is the value of using JSONSchema for validation?
  simplifies validiating the data that is passed in by a user
- What are some ways to decide which code to test?
  whats important
- What does `RETURNING` do in SQL? When would you use it?
  it returns what ever cols you want, when you want to return something from say an insert which normally doesnt return anything
- What are some differences between Web Sockets and HTTP?
  web sockets are statless so you can updatein real time by sending info both ways from server to client
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  kind of, i liked session better than jwt abut other wise its pretty much the same