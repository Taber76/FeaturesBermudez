class Store {
  constructor(name, categorie, description, photoUri) {
    this.name = name;
    this.categorie = categorie;
    this.description = description;
    this.image = photoUri;
    this.price = 0;
    this.id = 0;
  }
}

export default Store;
