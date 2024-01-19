// 🚧 Under construction 🚧



// document.addEventListener('DOMContentLoaded', function () {
//   // Variables to store user input
//   let botTokenInput = document.getElementById('botToken');
//   let userIdInput = document.getElementById('userId');
//   let intervalInput = document.getElementById('interval');

//   // Function to save settings
//   function saveSettings() {
//     let botToken = botTokenInput.value;
//     let userId = userIdInput.value;
//     let interval = intervalInput.value;

//     chrome.storage.sync.set({ botToken, userId, interval }, function () {
//       alert('Settings saved successfully!');
//     });
//   }

//   // Function to get extension status from Chrome storage
//   function getExtensionStatus(callback) {
//     chrome.storage.sync.get('extensionStatus', function (result) {
//       callback(result.extensionStatus);
//     });
//   }

//   // Function to update UI based on extension status
//   function updateUI(status) {
//     let switchInput = document.getElementById('switch');
//     switchInput.checked = status === 'on';
//   }

//   // Function to handle switch toggle
//   function handleSwitchToggle() {
//     let switchInput = document.getElementById('switch');
//     if (switchInput.checked) {
//       // Extension is turned on
//       chrome.storage.sync.set({ extensionStatus: 'on' }, function () {
//         alert('Extension turned on!');
//       });
//     } else {
//       // Extension is turned off
//       chrome.storage.sync.set({ extensionStatus: 'off' }, function () {
//         alert('Extension turned off!');
//       });
//     }
//   }

//   // Event listener for the Save Settings button
//   document.getElementById('saveSettings').addEventListener('click', saveSettings);

//   // Event listener for the switch toggle
//   document.getElementById('switch').addEventListener('change', handleSwitchToggle);

//   // Load extension status on popup load
//   getExtensionStatus(updateUI);
// });
