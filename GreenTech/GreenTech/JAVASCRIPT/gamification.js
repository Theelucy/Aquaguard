
<div class="puzzle-container" id="puzzle"></div>

<!-- Shuffle and Quit Buttons -->
<button onclick="shuffleTiles()">Shuffle</button>
<button onclick="quitGame()">Quit</button>

<!-- Modal for showing messages -->
<div id="messageModal" class="modal">
    <div class="modal-content">
        <p id="messageText"></p>
        <button class="close-btn" onclick="closeModal()">Close</button>
    </div>
</div>

<script>
    let tiles = [0, 1, 2, 3, 4, 5, 6, 7];
    tiles.push(-1);  
    let timer;
    let startTime;
    let points = 0; // Initialize points for the current game
    let totalPoints = 0; // Initialize total points across games
    let imageUrl = '../ASSETS/download.jpeg'; // Default image

    // Function to start the timer
    function startTimer() {
        startTime = Date.now();
        timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            document.getElementById('timer').innerText = `Time: ${(elapsed / 1000).toFixed(2)} seconds`;
        }, 100);
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timer);
    }

    // Start the game by creating the puzzle
    function startGame() {
        imageUrl = document.getElementById('imageSelector').value; // Get selected image
        points = 0; // Reset points for the new game
        document.getElementById('points').innerText = `Points: ${points}`; // Update points display
        startTimer();
        createPuzzle();
    }

    // Function to create the puzzle layout
    function createPuzzle() {
        const puzzleContainer = document.getElementById('puzzle');
        puzzleContainer.innerHTML = '';  // Clear the container
        tiles.forEach((tile, index) => {
            const tileElement = document.createElement('div');
            tileElement.classList.add('tile');

            if (tile === -1) {
                tileElement.classList.add('empty');  // Mark empty space
            } else {
                // Set background image for the tile
                const row = Math.floor(tile / 3);
                const col = tile % 3;
                tileElement.style.backgroundImage = `url('${imageUrl}')`;
                tileElement.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
                tileElement.addEventListener('click', () => moveTile(tile));
            }
            puzzleContainer.appendChild(tileElement);
        });
    }

    // Function to move a tile
    function moveTile(tile) {
        const tileIndex = tiles.indexOf(tile);
        const emptyIndex = tiles.indexOf(-1);
        
        // Check if the tile can be moved (it must be adjacent to the empty space)
        if ([tileIndex - 1, tileIndex + 1, tileIndex - 3, tileIndex + 3].includes(emptyIndex)) {
            tiles[emptyIndex] = tile;
            tiles[tileIndex] = -1;
            points++; // Increase points for valid move
            document.getElementById('points').innerText = `Points: ${points}`; // Update points display
            createPuzzle();
            checkWin();  // Check if the user has won
        }
    }

    // Function to shuffle the puzzle tiles
    function shuffleTiles() {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];  // Swap elements
        }
        createPuzzle();
    }

    // Function to quit the game
    function quitGame() {
        stopTimer();
        const timeTaken = (Date.now() - startTime) / 1000;
        showModal(`You have decided to quit the game. Your time: ${timeTaken.toFixed(2)} seconds. Points earned: ${points}. Total Points: ${totalPoints}. Better luck next time!`);
    }

    // Function to check if the puzzle is solved
    function checkWin() {
        if (tiles.join() === [0, 1, 2, 3, 4, 5, 6, 7, -1].join()) {
            stopTimer();
            totalPoints += points; // Add points earned in this game to total points
            const timeTaken = (Date.now() - startTime) / 1000;
            showModal(`Congratulations! You've successfully completed the puzzle in ${timeTaken.toFixed(2)} seconds. Points earned: ${points}. Total Points: ${totalPoints}.`);
            document.getElementById('totalPoints').innerText = `Total Points: ${totalPoints}`; // Update total points display
        }
    }

    // Function to display a custom message in a modal
    function showModal(message) {
        document.getElementById('messageText').innerText = message;
        document.getElementById('messageModal').style.display = 'flex';
        clearPuzzle(); // Clear the puzzle after displaying the modal
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById('messageModal').style.display = 'none';
    }

    // Function to clear the puzzle board
    function clearPuzzle() {
        document.getElementById('puzzle').innerHTML = '';  // Clear the puzzle container
        document.getElementById('timer').innerText = 'Time: 0.00 seconds';  // Reset the timer display
    }

    // Start the game when the script loads
    startGame();
</script>

<style>
    /* Add styles for the modal */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        justify-content: center; /* Center modal content */
        align-items: center; /* Center modal content */
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }

    .close-btn {
        background-color: #0078D4;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
    }
</style>
