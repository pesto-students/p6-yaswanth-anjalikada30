# What is Browser?

  A browser is a software program that is used to explore, retrieve, and display the information available on the World Wide Web. 
This information may be in the form of pictures, web pages, videos, and other files that all are connected via hyperlinks and categorized with the help of URLs (Uniform Resource Identifiers).

# How Website works?

Let’s start with the most obvious way of using the internet. You visit a website like academind.com.
The moment you enter this address in your browser and you hit ENTER, a lot of different things happen:
1. The URL gets resolved
2. A Request is sent to the server of the website
3. The response of the server is parsed
4. The page is rendered and displayed

![image](https://user-images.githubusercontent.com/113002603/193410219-33501b2b-35cc-4098-8b31-d1c33366d198.png)

For now, let's imagine that the web is a road. On one end of the road is the client, which is like your house. On the other end of the road is the server, which is a shop you want to buy something from.

**Your internet connection**: 
Allows you to send and receive data on the web. It's basically like the street between your house and the shop.
**TCP/IP**: 
Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the internet. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).
**DNS**:
Domain Name System is like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's IP address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.
**HTTP**: 
Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.
###### Component files: 
A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
###### Code files: 
Websites are built primarily from HTML, CSS, and JavaScript, though you'll meet other technologies a bit later.
Assets: This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.

## What happens, exactly?

When you type a web address into your browser (for our analogy that's like walking to the shop):

1. The browser goes to the DNS server, and finds the real address of the server that the website lives on (you find the address of the shop).
2. The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods). This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.
3. If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets (the shop gives you your goods, and you bring them back to your house).
4. The browser assembles the small chunks into a complete web page and displays it to you (the goods arrive at your door — new shiny stuff, awesome!).

# High level components of a browser:

The below image shows the main components of a web browser:

![image](https://user-images.githubusercontent.com/113002603/193413392-737677e7-8ff6-4207-a4e3-26ca62cb256c.png)

1. **The User Interface**:
The user interface is the space where User interacts with the browser. It includes the address bar, back and next buttons, home button, refresh and stop, bookmark option, etc. Every other part, except the window where requested web page is displayed, comes under it.

2. **The Browser Engine**: 
The browser engine works as a bridge between the User interface and the rendering engine. According to the inputs from various user interfaces, it queries and manipulates the rendering engine.

3. **The Rendering Engine**: 
The rendering engine, as the name suggests is responsible for rendering the requested web page on the browser screen. The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface. However, using plugins or extensions, it can display other types data also. Different browsers user different rendering engines:
- Internet Explorer: Trident
- Firefox & other Mozilla browsers: Gecko
- Chrome & Opera 15+: Blink
- Chrome (iPhone) & Safari: Webkit

4. **Networking**: 
Component of the browser which retrieves the URLs using the common internet protocols of HTTP or FTP. The networking component handles all aspects of Internet communication and security. The network component may implement a cache of retrieved documents in order to reduce network traffic.

5. **JavaScript Interpreter**: 
It is the component of the browser which interprets and executes the javascript code embedded in a website. The interpreted results are sent to the rendering engine for display. If the script is external then first the resource is fetched from the network. Parser keeps on hold until the script is executed.

6. **UI Backend**: 
UI backend is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. It underneath uses operating system user interface methods.

7. **Data Persistence/Storage**: 
This is a persistence layer. Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem. It is a small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks and preferences.

# Rendering engine: 

The networking layer will start sending the contents of the requested documents to the rendering engine in chunks of 8KBs.

![image](https://user-images.githubusercontent.com/113002603/193411687-8c427e9e-f140-49b6-931f-2a0d6adf57e4.png)

We describe five steps in the critical rendering path.

## Parsing:
Once the browser receives the first chunk of data, it can begin parsing the information received. Parsing is the step the browser takes to turn the data it receives over the network into the DOM and CSSOM, which is used by the renderer to paint a page to the screen.

1. **Building the DOM tree**:
The first step is processing the HTML markup and building the DOM tree. HTML parsing involves tokenization and tree construction.
The DOM is the internal representation of the markup for the browser. The DOM is also exposed, and can be manipulated through various APIs in JavaScript.

![image](https://user-images.githubusercontent.com/113002603/193412275-11315a81-8eda-4866-8f79-55be09cc6f07.png)

When the parser finds non-blocking resources, such as an image, the browser will request those resources and continue parsing. Parsing can continue when a CSS file is encountered, but <script> tags—particularly those without an async or defer attribute—block rendering, and pause the parsing of HTML.

**Preload scanner**:
While the browser builds the DOM tree, this process occupies the main thread. As this happens, the preload scanner will parse through the content available and request high priority resources like CSS, JavaScript, and web fonts. Thanks to the preload scanner, we don't have to wait until the parser finds a reference to an external resource to request it.

2. **Building the CSSOM**:
The second step in the critical rendering path is processing CSS and building the CSSOM tree. The CSS object model is similar to the DOM. 
The browser converts the CSS rules into a map of styles it can understand and work with. 
The browser goes through each rule set in the CSS, creating a tree of nodes with parent, child, and sibling relationships based on the CSS selectors.

## Render:
Rendering steps include style, layout, paint and, in some cases, compositing. 
The CSSOM and DOM trees created in the parsing step are combined into a render tree which is then used to compute the layout of every visible element, which is then painted to the screen.

3. **Style**:
The third step in the critical rendering path is combining the DOM and CSSOM into a **render tree**. The computed style tree, or render tree, construction starts with the root of the DOM tree, traversing each visible node.
Tags that aren't going to be displayed, like the <head> and its children and any nodes with display: none, such as the script { display: none; }

4. **Layout**:
The fourth step in the critical rendering path is running layout on the render tree to compute the geometry of each node.
  
After the construction of the render tree, it goes through a *layout process* of the render tree. When the renderer is created and added to the tree, it does not have a position and size. The process of calculating these values is called layout or reflow. 
*Layout* is the process by which the width, height, and location of all the nodes in the render tree are determined, plus the determination of the size and position of each object on the page.
*Reflow* is any subsequent size and position determination of any part of the page or the entire document.
  
The position of the root renderer is 0,0 and its dimensions are the viewport–the visible part of the browser window.
All renderers have a “layout” or “reflow” method, each renderer invokes the layout method of its children that need layout.

5. **Paint**:
The last step in the critical rendering path is painting the individual nodes to the screen, the first occurrence of which is called the first meaningful paint. 
In the painting or rasterization phase, the browser converts each box calculated in the layout phase to actual pixels on the screen. 
Painting involves drawing every visual part of an element to the screen, including text, colors, borders, shadows, and replaced elements like buttons and images. 
The browser needs to do this super quickly.

**Compositing**:
When sections of the document are drawn in different layers, overlapping each other, compositing is necessary to ensure they are drawn to the screen in the right order and the content is rendered correctly.

## Interactivity:

Once the main thread is done painting the page, you would think we would be *all set.* That isn't necessarily the case. If the load includes JavaScript, that was correctly deferred, and only executed after the onload event fires, the main thread might be busy, and not available for scrolling, touch, and other interactions.

Time to Interactive (TTI) is the measurement of how long it took from that first request which led to the DNS lookup and SSL connection to when the page is interactive — interactive being the point in time after the First Contentful Paint when the page responds to user interactions within 50ms. If the main thread is occupied parsing, compiling, and executing JavaScript, it is not available and therefore not able to respond to user interactions in a timely (less than 50ms) fashion.

If the main thread is occupied parsing, compiling, and executing JavaScript, it is not available and therefore not able to respond to user interactions in a timely (less than 50ms) fashion. That is not a good user experience. Avoid occupying the main thread.













