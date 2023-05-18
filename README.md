# Part 1: React Router Dog Finder

Build an app that routes to different dogs and displays information on that dog when you’re at that route.

The routes should include:

- `/dogs` as the homepage and shows all three dogs
- Clicking on a dog from the homepage takes you to that dog’s route i.e. clicking Whiskey should route to `/dogs/whiskey`
- Any endpoint not listed should redirect to `/dogs`

## Recommended Structure

You can preload the <App /> component with the following defaultProps for convenience:

```
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
```

## Components

1. `<App />` should render:

- `<Nav />` component with the dogs’ names passed as props
- `<Switch>` component with `<Route />` declarations

```
Example:
return (
  <Switch>
    <Route exact path="/dogs" >
      <DogList /> // what props will this need?
    </Route>
    <Route path="/dogs/:name" >
      <DogDetails /> // what props will this need?
    </Route>
    <Redirect to="/dogs" /> // Redirect is depreciated, use Navigate
  </Switch>
);
```

2. `<DogList />` takes all the dog info from the props of `<App />`
3. `<DogDetails />` shows all of the info about a single dog

## Bonus

Is there a way to get the current dog before you render the component, passing dog instead of the entire list of dog data?

# Part 2: React Router Color Factory

Build an app that lets you view colors and add new colors.

## User Stories

1. User can go to `/colors` to see a list of all available colors.
2. User can click on one of the colors in their colors list and is routed to see that color `/colors/:color`.
3. User can click on a button to show add new color form `/colors/new`.
4. User is redirected to the colors index after submitting new color form and new color appears at the top.
5. If user navigates to an invalid URL they are redirected to the colors index page.

# Further Study

1. Write tests for both applications.
2. Persist colors data in localStorage (with useEffect).
3. Add styling to both apps.

# Further Study 2: React Router Calculator

Build a calculator that supports routes like:

- /add/1/2: should render a component that displays 3.
- /subtract/3/2: should render a component that displays 1.
- /multiply/6/4: should render a component that displays 24.
- /divide/20/5: should render a component that displays 4.

> **Bonus:** Create calculator without using a different component for each of the four math operations!
