# Updating the upstream version

Scriptwerk is built from the `scriptwerk/` git submodule
(<https://github.com/kwadde-cmyk/scriptwerk-startos>), pinned at an upstream tag. The image is
upstream's own `Dockerfile`, built with the submodule as its context
(`images.scriptwerk.source.dockerBuild.workdir` in `startos/manifest/index.ts`); there is no
`dockerTag` and the package carries no Dockerfile of its own.

## Determining the upstream version

Upstream tags releases as `v<version>_<n>`, the StartOS tag form, on its own repo:

```sh
git -C scriptwerk fetch --tags && git -C scriptwerk tag --sort=-v:refname | head -5
```

The pin is the submodule's recorded commit in this repo's tree.

## Applying the bump

1. Move the submodule to the new tag and stage the pointer:

   ```sh
   git -C scriptwerk fetch --tags
   git -C scriptwerk checkout vX.Y.Z_0
   git add scriptwerk
   ```

2. Set `version` in `startos/versions/current.ts` to `X.Y.Z:0`, matching the tag's upstream half.
3. Rewrite `releaseNotes` in that file for all five locales.
4. If only the packaging changed, leave the submodule alone and increment the revision instead
   (`0.1.25:0` → `0.1.25:1`).
5. Check `scriptwerk/scripts/bitcoind-proxy.mjs` and `electrum-proxy.mjs` still read the
   `BITCOIND_RPC_*` and `ELECTRUM_*` variables `startos/main.ts` sets.
