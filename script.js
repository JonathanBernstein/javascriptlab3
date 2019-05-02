"use strict";

class AddressBook {
    constructor() {
        this.contacts = [
          new Contact("Geraldo", "Geraldo@rocketmail.com",
         "555-555-5555", "my dog"),
          new Contact("Harold", "Harold@yahoo.com",
         "555-515-1155", "my dad"),
        ];
    }
    add(Info){
     this.contacts.push(Info);   
    }
    deleteAt(index){
        this.contacts.splice(index, 1);
    }

    
    print(){
        for (let i = 0; i < this.contacts.length; i++){
            console.log(` Index: ${i}, Name: ${this.contacts[i].name},
            Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone},
            Relation: ${this.contacts[i].Relation}`);
            
        }
    }
} 




class Contact {
    constructor(name, email, phone, relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const book = new AddressBook();

while (true) {
 let choice = prompt("Add, Delete, Print, or Quit");
 if(choice === "Quit") {
     console.log("Goodbye.")
     break;
 } else if (choice === "Print"){
    book.print();
 } else if (choice === "Delete") {
    let index = prompt("Index to delete?");
    book.deleteAt(index);
 } else if (choice === "Add") {
    book.add(new Contact(
    prompt("Enter a name."),
    prompt("Enter an email."),
    prompt("Enter a phone number."),
    prompt("Enter a relation."),
    ));
 }
}