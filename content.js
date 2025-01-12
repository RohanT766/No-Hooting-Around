// Function to make the owl fly in from the top-right corner
function animateOwlIntoScreen() {
    // Create the owl element
    const flyingOwl = document.createElement("img");
    flyingOwl.src = "https://media.giphy.com/media/5BTz4HSGbL7l6su75e/giphy.gif";
    flyingOwl.style.position = "fixed";
    flyingOwl.style.top = "-200px"; // Start completely off-screen at the top
    flyingOwl.style.right = "-200px"; // Start completely off-screen on the right
    flyingOwl.style.transform = "translate(0, 0)"; // No centering required here
    flyingOwl.style.width = "200px"; // Owl size
    flyingOwl.style.zIndex = "9999"; // Ensure it appears above all content
    flyingOwl.style.transition = "top 1.5s ease-out, right 1.5s ease-out"; // Smooth flying animation
  
    // Append the owl to the document body
    document.body.appendChild(flyingOwl);
  
    // Trigger the owl flying in
    setTimeout(() => {
        flyingOwl.style.top = "20px"; // Final position inside the screen vertically
        flyingOwl.style.right = "20px"; // Final position inside the screen horizontally
    }, 1200); // Slight delay to ensure proper rendering
  
    // Optionally remove the owl after a delay or keep it on screen
    setTimeout(() => {
        flyingOwl.remove();
    }, 5000); // Owl stays for 5 seconds before disappearing
}
  
// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "flyOwl") {
        // Trigger the owl animation
        animateOwlIntoScreen();
        sendResponse({ status: "Owl animation triggered on webpage" });
    }
});
