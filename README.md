# Technical ventures for PRX candidates

This repo contains some possible ideas/projects for PRX developer
candidates, as part of our [Hiring Process](https://github.com/PRX/docs.prx.org/blob/master/external/hiring.md).

If you do decide to use one of these projects, please let us know
so we can duplicate this repo to one just for you. And you can make
a non-public PR with your changes over there.

## Copying to a private repo

For PRX devs, this is how I've been copying to a private/temporary repo:

```sh
# (1) go and create the private repo via github UI

# (2) copy this repo, and push up to the private repo
git clone --bare https://github.com/PRX/code-ventures.git code-ventures-<name>
cd code-ventures-<name>
git push --mirror git@github.com:PRX/code-ventures-<name>.git

# (3) invite applicant's github user to the private repo
```
