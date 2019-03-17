git checkout 
git checkout -b 新建并转到
git merge
git branch -d iss53  删除分支 	
 git branch -v  查看每个分支最后一次提交
 git branch --merged  查看哪些分支合并到master分支
## pull request通常是在fork别人的repo后使用





Please, commit your changes or stash them before you can switch branches.

+ warning: not deleting branch 'hotfix' that is not yet merged to
         'refs/remotes/origin/hotfix', even though it is merged to HEAD.
error: The branch 'hotfix' is not fully merged.
如果分支没有合并到master分支，尝试使用git branch -d命令删除会失败







