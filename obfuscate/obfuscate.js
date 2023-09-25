const js = require("javascript-obfuscator");
const fs = require("fs");
const CleanCSS = require('clean-css');
const minify = require('html-minifier').minify;

findHtmlCssFiles("../build");

const ignore = [];

function findHtmlCssFiles(location) {
    fs.readdir(location, function (err, files) {
        if (err) return console.error(err);
        for (let i = 0; i < files.length; i++) {
            if (!ignore.includes(files[i])) {
                const file = location + "/" + files[i];
                fs.stat(file, async (err, stats) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    if (stats.isFile()) {
                        const fileContent = fs.readFileSync(file, "utf8");
                        const copyright = getCopyright(files[i]);
                        if (files[i].endsWith(".html")) {
                            let result = minify(fileContent, {
                                removeComments: true,
                                includeAutoGeneratedTags: false,
                                minifyCSS: false,
                                minifyJS: false,
                                minifyURLs: false,
                                collapseWhitespace: true
                            });
                            fs.writeFileSync(file, copyright + "\n\n" + result, "utf8");
                        } else if (files[i].endsWith(".css")) {
                            let result = new CleanCSS({}).minify(fileContent);
                            fs.writeFileSync(file, copyright + "\n\n" + result.styles, "utf8");
                        } else if (files[i].endsWith(".js")) {
                            let result = js.obfuscate(fileContent, {
                                compact: true,
                                controlFlowFlattening: false,
                                deadCodeInjection: false,
                                debugProtection: false,
                                debugProtectionInterval: 0,
                                disableConsoleOutput: false,
                                identifierNamesGenerator: 'hexadecimal',
                                log: false,
                                numbersToExpressions: false,
                                renameGlobals: false,
                                selfDefending: false,
                                simplify: true,
                                splitStrings: false,
                                stringArray: true,
                                stringArrayCallsTransform: false,
                                stringArrayCallsTransformThreshold: 0.5,
                                stringArrayEncoding: [],
                                stringArrayIndexShift: true,
                                stringArrayRotate: true,
                                stringArrayShuffle: true,
                                stringArrayWrappersCount: 1,
                                stringArrayWrappersChainedCalls: true,
                                stringArrayWrappersParametersMaxCount: 2,
                                stringArrayWrappersType: 'variable',
                                stringArrayThreshold: 0.75,
                                unicodeEscapeSequence: false,
                                compact: true,
                                domainLock: ["exotic-homes.github.io"],
                                domainLockRedirectUrl: "https://mrepol742.github.io/unauthorized?utm_source=exotic-homes.github.io&reason=js"
                            });
                            fs.writeFileSync(file, copyright + "\n\n" + result.getObfuscatedCode(), "utf8");
                        }
                    } else if (stats.isDirectory()) {
                        console.log("[Folder] " + file);
                        findHtmlCssFiles(file);
                    } else {
                        console.log("[Unknown] " + file);
                    }
                });
            } else {
                console.log("[Ignore Files] " + files[i]);
            }
        }
    });
}

function getCopyright(format) {
    if (format.endsWith(".html")) {
        return `<!--
        ~
        ~ Copyright (c) 2023 Exotic Homes (exotic-homes.github.io). All Rights Reserved.
        ~
        ~
        ~ Unless required by the applicable law or agreed in writing, software
        ~ distributed under the License is distributed on an "AS IS" BASIS,
        ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        ~ See the License for the specific language governing permissions and
        ~ limitations under the License.
        -->`;
    }
    return `/*
    *
    * Copyright (c) 2023 Exotic Homes (exotic-homes.github.io). All Rights Reserved.
    *
    *
    * Unless required by the applicable law or agreed in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
   `;
}
