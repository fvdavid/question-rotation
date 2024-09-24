## Question Rotation


Interfaces and Types
    - Region: A type representing the regions (SG and US)
    - QuestionSet: An interface for holding region-specific questions.

Data
    - questionSets: Hardcoded question sets for regions.

Configuration
    - cycleDurationInDays: Defines the cycle duration.
    - cycleStartTime: The start time for the first cycle (set to a specific date and time).

Functions
    - getCurrentCycle(): Calculates the current cycle based on the start time and duration.
    - getQuestionForRegion(): Fetches the question for the given region and cycle, using modulo to cycle through questions.

Main Execution:
    - Calculates the current cycle using the provided functions.
    - Logs the assigned question for each region.