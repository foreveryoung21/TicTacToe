


let game= (function(){


    function Player(shape,name){
        let playerName =name;
        let playerShape=shape;
       

        return {
            getName(){
                return playerName;
            },
            getShape(){
                return playerShape;
            },
            setName(name){
                playerName =name;

            }
        }

        
    }

    let player1 = Player("X","player 1");
    let player2 = Player("0","player 2");
    let board = {
        player1:player1,
        player2:player2,
        turn:"",
        won:false,
        grid:[null,null,null,null,null,null,null,null,null
    ],
        init:function(){
            board.domElement();
            board.bindEvents();
        },
        domElement:function(){
            let boardEl = document.querySelector("#board");
            let display = document.querySelector("div h1");
            let reset = document.querySelector("#resetBtn");
            let start = document.querySelector("#startBtn");
            let input1 = document.querySelector("#player1");
            let input2 = document.querySelector("#player2");
            this.board = boardEl;
            this.display = display;
            this.reset = reset;
            this.start = start;
            this.input1 = input1;
            this.input2 = input2;
          
           
        },
        bindEvents:function(){
        this.board.addEventListener("click",this.playerTurn.bind(this));
        this.reset.addEventListener("click",this.resetBtn.bind(this));
        this.start.addEventListener("click",this.startBtn.bind(this));

            
        },
        playerTurn(event){

          let count =0;

            if(event.target.matches(".tile")){
                let tile = event.target;
                if(this.turn ===""){
                    this.turn =player1.getName();
                    this.populateGrid(event,player1);
                    this.render(tile,player1)
                    this.checkBoard(player1);
                }else if(this.turn === player1.getName()){
                    this.turn = player2.getName();
                    this.populateGrid(event,player2);
                    this.render(tile,player2);
                    this.checkBoard(player2);
                }else{
                    this.turn = player1.getName();
                    this.populateGrid(event,player1);
                    this.render(tile,player1);
                    this.checkBoard(player1);
                }

            }

            

        },

        render(tile,player){
            if(tile.innerHTML ===""){
                tile.innerHTML = player.getShape();
             }
             this.turn = player.getName();
             this.display.innerText = `${this.turn} TURN !`;

        },
        checkBoard(){
            if(this.grid[0]===player1.getShape()){
                if(this.grid[1]===player1.getShape() && this.grid[2]===player1.getShape()){
                    this.playerWon(player1);
                    this.won= true;
                }
                if(this.grid[3] === player1.getShape() && this.grid[6]=== player1.getShape()){
                    this.playerWon(player1);
                    this.won= true;
                }
                if(this.grid[4] === player1.getShape() && this.grid[8]=== player1.getShape()){
                    this.playerWon(player1);
                    this.won= true;
                }
            } else if(this.grid[8]===player1.getShape()){
                if(this.grid[2]===player1.getShape() && this.grid[5]===player1.getShape()){
                    this.playerWon(player1);
                    this.won= true;
                }
                if(this.grid[6] === player1.getShape() && this.grid[7]=== player1.getShape()){
                    this.playerWon(player1);
                    this.won= true;
                }
                
            }

            

            if(this.grid[0]===player2.getShape()){
                if(this.grid[1]===player2.getShape() && this.grid[2]===player2.getShape()){
                    this.playerWon(player2);
                    this.won= true;
                    
                }
                if(this.grid[3] === player2.getShape() && this.grid[6]=== player2.getShape()){
                    this.playerWon(player2);
                    this.won= true;
                }
                if(this.grid[4] === player2.getShape() && this.grid[8]=== player2.getShape()){
                    this.playerWon(player2);
                    this.won= true;
                }
            }else if(this.grid[8]===player2.getShape()){
                if(this.grid[2]===player2.getShape() && this.grid[5]===player2.getShape()){
                    this.playerWon(player2);
                    this.won= true;
                }
                if(this.grid[6] === player2.getShape() && this.grid[7]=== player2.getShape()){
                    this.playerWon(player2);
                    this.won= true;
                }
                
            }

          
        },
        populateGrid(event,player){
            let dataIndex = event.target.getAttribute("data-index");
            
            if(dataIndex ==="0" & this.grid[0]===null){
                this.grid[0]= player.getShape();
            }else if(dataIndex ==="1" & this.grid[1]===null){
                this.grid[1]= player.getShape();
            }else if(dataIndex ==="2" & this.grid[2]===null){
                this.grid[2]= player.getShape();
            }else if(dataIndex ==="3" & this.grid[3]===null){
                this.grid[3]= player.getShape();
            }else if(dataIndex ==="4" & this.grid[4]===null){
                this.grid[4]= player.getShape();
            }else if(dataIndex ==="5" & this.grid[5]===null){
                this.grid[5]= player.getShape();
            }else if(dataIndex ==="6" & this.grid[6]===null){
                this.grid[6]= player.getShape();
            }else if(dataIndex ==="7" & this.grid[7]===null){
                this.grid[7]= player.getShape();
            }else if(dataIndex ==="8" & this.grid[8]===null){
                this.grid[8]= player.getShape();
            }

            

        },
        playerWon(player){
            this.display.innerText = ` ${player.getName().toUpperCase()} HAS WON`;           
        },

        startBtn(event){
            event.preventDefault();
            player1.setName(this.input1.value);
            player2.setName(this.input2.value);
            this.turn = player1.getName();
            this.display.innerText = `${this.turn} TURN !`;
            this.input1.value ="";
            this.input2.value ="";



        },
        resetBtn(){
          let tiles = document.querySelectorAll(".tile");
            for(let i =0; i<this.grid.length;i++){
                this.grid[i] =null;
                tiles[i].innerHTML ="";
                this.display.innerHTML ="";
            }


    
        }

        
    }


   board.init();

})();



