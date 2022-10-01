#What is Browser?

A browser is a software program that is used to explore, retrieve, and display the information available on the World Wide Web. 
This information may be in the form of pictures, web pages, videos, and other files that all are connected via hyperlinks and categorized with the help of URLs (Uniform Resource Identifiers).

#How Website works?

Let’s start with the most obvious way of using the internet. You visit a website like academind.com.
The moment you enter this address in your browser and you hit ENTER, a lot of different things happen:
1)The URL gets resolved
2)A Request is sent to the server of the website
3)The response of the server is parsed
4)The page is rendered and displayed

![image](https://user-images.githubusercontent.com/113002603/193410219-33501b2b-35cc-4098-8b31-d1c33366d198.png)

For now, let's imagine that the web is a road. On one end of the road is the client, which is like your house. On the other end of the road is the server, which is a shop you want to buy something from.

######Your internet connection: Allows you to send and receive data on the web. It's basically like the street between your house and the shop.
######TCP/IP: Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the internet. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).
######DNS: Domain Name System is like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's IP address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.
######HTTP: Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.
######Component files: A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
######Code files: Websites are built primarily from HTML, CSS, and JavaScript, though you'll meet other technologies a bit later.
Assets: This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.

##What happens, exactly?

When you type a web address into your browser (for our analogy that's like walking to the shop):

1)The browser goes to the DNS server, and finds the real address of the server that the website lives on (you find the address of the shop).
2)The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods). This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.
3)If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets (the shop gives you your goods, and you bring them back to your house).
4)The browser assembles the small chunks into a complete web page and displays it to you (the goods arrive at your door — new shiny stuff, awesome!).

