function updateContactInfo() {
    let mail = prompt("Please enter your email address:");
    while (!mail.includes("@") || !mail.includes(".")) {
      mail = prompt("Error email address. Please try again:");
    }
    let phone_number = prompt("Please enter your phone number:");
    let address= prompt("Please enter your address:");
  
    $("#contact").find("p").eq(0).text("Email: " + mail);
    $("#contact").find("p").eq(1).text("Telephone: " + phone_number);
    $("#contact").find("p").eq(2).text("Address: " + address);
  
    console.table("From: " + mail);
    console.table("Contact: " + phone_number);
    console.table("Address: " + address);
  }


  

  
  
  
  
  