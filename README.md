# Lab 5 - Starter

* Kenneth Vuong
* Ali Mohammadiasl

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    - We believe that this is not entirely possible. The reason that we say this is because for a messaging app, there is far too many moving components to have one unit test. What you have to consider is first one user typing their message and making sure that all the small componenets work and then you still have to have a fully functional backened that takes care of sending the message to another user.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    - Yes, we believe that this is possible to do. This is similar to the text box we have in the earlier section of the lab. We have a variable that stores the content that the user enters and we can simply chec the lenght of that sepcific variable. If the lenght is less than 80, we it is fine, if it is greater than 80, throw an error.
  

[https://kennethkietvuong.github.io/Lab5_Starter/](https://kennethkietvuong.github.io/Lab5_Starter/)
