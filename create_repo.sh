#!/bin/sh
echo "What is your first name? (use all lowercase)"
read USER_FIRSTNAME
echo "Hello ${USER_FIRSTNAME}, what is your Github username?"
read GITHUB_USERNAME
echo "Great, thanks ${USER_FIRSTNAME}. I've got your Github username as: ${GITHUB_USERNAME}"
echo "What is the name of your new repository?"
read NEW_REPO_NAME
echo "Okay, thanks. I'll create a new repository with this name: ${NEW_REPO_NAME}"
echo "Just a moment while I get some work done..."
echo "Jason's Easy Repo Creator --------- > [Cloning template]"
git clone https://github.com/fight-gravity/repo_template.git
echo "Jason's Easy Repo Creator --------- > [Renaming repository name]"
mv repo_template ${NEW_REPO_NAME}
echo "Jason's Easy Repo Creator --------- > [Adding new remote repository location.]"
cd ${NEW_REPO_NAME}
git remote remove origin
git remote add ${USER_FIRSTNAME} "https://github.com/${GITHUB_USERNAME}/${NEW_REPO_NAME}.git"
echo "Jason's Easy Repo Creator --------- > [Initialize first push to new repository]"
git push ${USER_FIRSTNAME} master
echo "Jason's Easy Repo Creator ---------[All steps completed! Thanks for using Jason's Easy Repo Creator.]"
cd ${NEW_REPO_NAME}
atom .