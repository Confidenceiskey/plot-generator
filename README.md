### [Star Wars Plot Generator](https://confidenceiskey.github.io/plot-generator/)

_A web app that generates a Star Wars Plot (title & description) for you_

#### Project Guidelines

The aim for this project was to build a web app that used the SWAPI API to allow the user the choice to add who (or what) they wanted in a plot. The full design and UI was up to me to create.  
To complete the project, the below **user stories** needed to be fulfilled:
- I'm able to select at least two resources
- I'm able to search for a particular resource
- A random resource can be generated automatically for me
- A plot title, description and resource list is generated for me

#### Project Approach

Due to the requirement of having to use a style library for this project (rather than custom code all the CSS), I decided to see what my options were. After a bit of research, I ended up choosing to use Material-UI. 

Once I had that out of the way I decided to figure out what sort of plot generator I wanted to create and how exactly I wanted to go about doing it. This involved a bit of creativity, brainstorming and sketching some rough designs. After I had an idea of what I wanted to build, I went through the Material-UI docs and tried to figure out which components that I would need for the project. 

I started coding up the project and getting the basic, static UI layout complete. This also involved having to use another library (React-Select) because Material-UI did not have this specific component. Again, this meant having to learn another library, so I could implement the server side searching within this component. 

Once I had my layout working and updating between the various UI options, I got to work on retrieving and manipulating the data from the SWAPI API. Once I had the data, I created a function that would generate a random plot by coming up with a random title, description and list of resources used. 

At the end I added a modal window overlay that would show the plot to the user.

#### Made with
- HTML, CSS, JavaScript & React 
- Using Material-UI & React-Select
- SWAPI API


#### Icons by [Flaticon](https://www.flaticon.com)

- **Refresh sign:** Made by [Pixel Buddha](https://www.flaticon.com/authors/pixel-buddha)

- **Trash bin:** Made by [Freepik](https://www.flaticon.com/authors/freepik)

- **Delete 'X' sign:** Made by [Twitter](https://www.flaticon.com/authors/twitter)

#### Other Icons

- **Darth Vader Mask:** Made by [Get Drawings](http://getdrawings.com/darth-vader-mask-silhouette)

#### Preview

Check out the [live version](https://confidenceiskey.github.io/plot-generator/)

![Screenshot of my Star Wars Plot Generator project built in React](https://confidenceiskey.github.io/codepenimg/plot-generator.jpeg "Screenshot of my Star Wars Plot Generator React App")

##

#### Disclaimer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
