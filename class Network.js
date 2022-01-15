class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime() {
      const remData = this.data - this.users * 5;
      if(remData >= 10){
        return true;
      } else {
        return false;
      }
    }
    
  };
  const library = new Network(60, 9) 
  console.log(library.movieTime());