
# Docusaurus variable processing

Longhorn had many instances of Hugo specific handlebars style pre-processing.

For images.

{{< figure src="the-source-path" alt="the-alt-text" >}}

I fixed this with scripts and regular expressions to map to:

`![the-alt-text](the-source-path)`:was

For the current version, depending on the path of the markdown file.

`{{< current-version >}}`

In a file `content/docs/1.3.0/example.md`, the `{{< current-version >}}`
construct gets replaced with '1.3.0'.

It occurs ±1800 times in the source, so a replacement solution for anyone
working on the docs, wouldn't have to perform error-prone manual editing seemed
a good idea.

I played around with a few ideas I was able to find online without much success,
they always seemed to be partial solutions. Then I happened to search for
'docusaurus markdown preprocessor' to see if someone had done something similar.

It's already built in, I just hadn't found it.

https://docusaurus.io/docs/api/docusaurus-config#preprocessor

So, replace {{< current-version >}} with [[< current-version >]] as Docusaurus
breaks if using the '{}' braces. Now, we can implement variables as required.

## Longhorn current-version from path

The necessary code is in longhorn-versions.js. It requires importing into
`docusaurus.config.js` to be used. It should be easily transferrable to other
similar repositories.

```javascript
import lhSubstituteCurrentVersion from "./js-lib/longhorn-versions.js";
```

You can see in `docusaurus.config.js` that the preprocessor is defined. It
receives a pathname and the file content to work with. The pathname allows the
version number to be extracted and used as `current-version`.

The imported function `lhSubstituteCurrentVersion` is called. It uses a regular
expression to get the version number from the path, storing in in the `vno`
capture group. Then all instances of `{{< current-version >}}` in the file
content are replaced with the `vno`. If needed a default `vno` can be retrieved
from the `versions.json` file.

The import of `docusaurus-variable.js` is for more general variables. The
variables are in a JSON array in `variables.json`. The imported function
`dsVariableProcessor` iterates over the array of variables replacing
`[[< variable_name >]]` with `variable_value` in the file content.
