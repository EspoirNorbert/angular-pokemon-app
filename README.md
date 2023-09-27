# ng-pokemon-app

ng-pokemon-app is an Angular web application for Pokémon enthusiasts. It offers a variety of classic features to interact with your Pokémon collection. Whether you want to list your Pokémon, get details about a specific Pokémon, edit or delete a Pokémon, or even search for a particular Pokémon, this application has got you covered. Additionally, it provides basic authentication to manage your Pokémon collection.

## Main Features

- **Pokémon List**: Displays a comprehensive list of all your Pokémon with their names and images.

- **Pokémon Details**: Provides detailed information about a selected Pokémon, such as its type, height, weight, etc.

- **Pokémon Editing**: Allows you to update the information of an existing Pokémon, such as its name, type, etc.

- **Pokémon Deletion**: Permanently removes a Pokémon from your collection.

- **Pokémon Search**: Enables you to search for a specific Pokémon using its name or other search criteria.

- **Authentication**: Offers basic authentication to secure your Pokémon collection. Only authenticated users have access to Pokémon management features.

## Technologies Used

- **Angular**: Version 15.2.0

- **Firebase**: This application is deployed on the Firebase platform to handle user management and Pokémon data storage.

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/ng-pokemon-app.git
```

2. Navigate to the project directory.

```bash
cd ng-pokemon-app
```

3. Install Angular dependencies.

```bash
npm install
```

## Utilisation

1. Exécutez l'application en utilisant la commande suivante :

```
ng serve
```

2. Accédez à l'application dans votre navigateur en visitant `http://localhost:4200`

## Configuration Firebase

1. Créez un projet Firebase sur https://console.firebase.google.com/ si vous n'en avez pas déjà un.

2. Installer firebase en ligne de commande en tapant la commande suivante

```bash
npm install -g firebase-tools
```

## Déploiement

1. Build angular project with the following command:

```bash
ng build
```

1. To deploy the application on Firebase, ensure you have configured Firebase as described above.
2. Use the following commands to deploy the application to Firebase Hosting:

```bash
firebase login
firebase init
```

3. Initialize the Firebase project and follow the prompts to set up Firebase Hosting.
4. Deploy the application to Firebase Hosting with the following command:

```bash
firebase deploy
```

# Screenshoot
![Login Page](/src/assets/screens/ngpokemon_login_page.png)
![Pokemon List Page](/src/assets/screens/ngpokemon_list_page.png)
![Detail Pokemon Page](/src/assets/screens/ngpokemon_detail_page.png)
![Add Pokemon Page](/src/assets/screens/ngpokemon_add_page.png)
![Search Pokemon](/src/assets/screens/ngpokemon_search_pokemon.png)

3. Initialialiser le projet firebase avec les commandes suivantes:

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT)..
