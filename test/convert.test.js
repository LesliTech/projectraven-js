/*
Lesli

Copyright (c) 2020, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

RavenParser-JS - JavaScript data parser for ProjectRaven

Powered by https://www.lesli.tech
Building a better future, one line of code at a time.

@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html
@version  0.1.0-alpha

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
var assert = require('assert');


// · 
let odinJS = require("../index")


// · 
describe("convertJs", function() {

    describe("bytes to human", function() {

        it("converts 1024 bytes to Kilobyte with binary base", function() {
            assert.equal(odinJS.convert.bytesToH(1024), "1.0 KiB");
        })
    
        it("converts 1024 bytes to Kilobyte with decimal base", function() {
            assert.equal(odinJS.convert.bytesToH(1024, true), "1.0 kB");
        })
    
    })    

})

