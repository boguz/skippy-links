# define colors
GREEN := \033[0;32m
RESET := \033[0;30m

# Build assets
build:
	tsc
	@echo "${GREEN}=====> 📦 skip-links build is done${RESET}"

# Start the project on a browser window
start:
	tsc
	concurrently -k -r tsc --watch --preserveWatchOutput
	wds

# Lint project
lint:
	eslint --ext .ts,.html . --ignore-path .gitignore

# Lint project
lint-fix:
	eslint --ext .ts,.html . --fix --ignore-path .gitignore

# Fix styles by running prettier
beautify:
	prettier "**/*.ts" --check --ignore-path .gitignore

# Format code
format:
	make lint-fix
	make prettier

# Run JS tests
test-js:
	tsc
	wtr --coverage
