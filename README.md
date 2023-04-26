# bfc

bfc is a command-line interface (CLI) tool that calculates the amount of time a computer would need to brute-force a given string. Brute-force is a method of trying all possible combinations of characters until the correct one is found. bfc can help you estimate how secure your passwords are against brute-force attacks.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Requirements

To use bfc, you need to have Node.js installed on your computer. Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. You can download Node.js from https://nodejs.org/en/.

## Installation

To install bfc globally on your computer, follow these steps:

1. Download or clone this repository to your local machine (CLick the green code button and then download zip).
2. Open a terminal and navigate to the directory where you downloaded or cloned the repository.
3. Run the command `npm install -g` to install bfc as a global package. You may need to use administrator privileges to do this.
4. Make sure that scripts are enabled on your system. You can check this by running the command `Set-ExecutionPolicy RemoteSigned` on Windows PowerShell.

## Usage

To use bfc, you need to provide a string as an argument. For example, if you want to calculate how long it would take to brute-force the string "hello", you can run the command `bfc hello`. bfc will then output the estimated time in seconds, minutes, hours, days, years depending on how long it is.

## License

bfc is licensed under the MIT License. See [LICENSE](LICENSE) for more details.
  
  
More updates to come