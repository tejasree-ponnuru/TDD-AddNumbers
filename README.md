# TDD-AddNumbers

This project implements a robust **Add** function developed strictly following Test-Driven Development (TDD) principles. The goal is to create a reliable utility that processes a string of numbers, handles multiple delimiters gracefully, and enforces input validation by detecting and reporting negative numbers.

The function supports:
- Default delimiters: comma (`,`) and newline (`\n`)
- Custom single-character delimiters specified in the format `//[delimiter]\n[numbers]`
- Ignoring empty values between delimiters
- Throwing clear, descriptive errors listing all negative numbers encountered in the input

By adopting TDD, the implementation ensures that every feature and edge case is covered by tests before the actual code is written. This approach improves code quality, maintainability, and reliability, making the function easy to extend or refactor in the future.

This project demonstrates how careful planning, incremental development, and automated testing combine to build a well-structured, production-ready utility.
