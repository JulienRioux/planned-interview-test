# Planned interview test

Here is my coding interview assessment. You can watch the following video demonstrating the functionality of the app. I have modularized the components to optimize reusability and made efforts to enhance efficiency wherever possible.

https://github.com/JulienRioux/planned-interview-test/assets/26312935/786852db-b2a9-4740-aaa2-4b14a8fca27b


## Files structure

The components are divided into three separate files. For example, the button component resides within the `src/component/button folder`. The primary logic is contained in the `src/component/button/index` file, the styles are located in the `src/component/button/styles` file, and the types are defined in the `src/component/button/types` file. Most of the reusable components are structured as above.

## Users fetching and filtering

Regarding the fetching and filtering of users, all the logic is centralized within the `use-users` hook, and the state is stored in the `src/states/users/index` file.

## Testing

I have included two test suites in the project for the `use-users` hook and the `input` component, as they contain more complex functionality. Although there aren't numerous tests, these two tests showcase my testing skills effectively.

To run the tests, you can use the command `yarn test` or `yarn jest --watchAll`.

I had to add a few package to do so and update a few package in order to make everything works. Please note that I did not upgrade all packages and did not use all the latest package available. For a production app, I would have upgrade most of the package since the repo is +/- 3 years old but I think it's ok for this demo.

<img width="811" alt="" src="https://github.com/JulienRioux/planned-interview/assets/26312935/d8af00d5-4026-46f1-b030-77c75b6677ce">

## Design Token approach

To enhance usability and ensure consistent styling throughout the application, I have adopted a tokenized approach for styling components. The corresponding logic can be found within the `src/theme folder.` Additionally, I have included types to the theme to enable IntelliSense functionality.

<img width="980" alt="image" src="https://github.com/JulienRioux/planned-interview/assets/26312935/71567e52-0f27-4a78-8f9d-8b251dccfd41">
