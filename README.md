# Web Development Project 3 - *Data Structure Flash Cards Pt 2*

Submitted by: **Angel Avila**

This web app: **Displays flash cards that allows users to study/test their Data Structures knowledge through guessing the answers**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [ ] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/Avila-Angel/codepathProject3/blob/main/codepathProject3/src/assets/demoPt2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
 -->

## Notes

### Describe any challenges encountered while building the app:
One challenge I had with improving the app was getting the following card to not display the answer when the card is flipped. What I did to solve it was creating a clear method for when the user presses next, instead of seeing the card flip, showing the answer for a brief second, I had the card clear all info once the next button is pressed.

## License

    Copyright [2023] [Angel Avila]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
