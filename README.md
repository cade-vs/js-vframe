


#  vFRAME -- VIRTUAL HTML FRAMES MACHINERY
##   2018 (c) Vladi Belperchinov-Shabanski "Cade"

#  INTRODUCTION

vFRAME is compact JavaScript HTML frames virtualization library.

#  SYNOPSIS

    <html>
    <body>

    <h1>VFrame</h1>

    This is a html text for testing frames!

    <div class=vframe>
        This is first <a href=go1.html>test</a>
    </div>

    And another frame:
    
    <div class=vframe>
        <form action=form.pl method=post>
        <p><input name=text>
        <p><input type=file name=fff>
        <p><input type=submit value="GO!">
        </form>
    </div>

    Here is footer text
    <script src="vframe.js"></script> 
    </body>
    </html>


#  DESCRIPTION

It uses <DIV> blocks as virtual frames. All links and forms inside virtual
<DIV> frame will replace only the enclosing <DIV> frame content instead of
reloading the whole page. 

To enable <DIV> to act as virtual frame, "vframe" class must be added (as
shown in the SYNOPSIS above).

#  NOTES

vFRAME is similar to <iframe> but very different than <frame>.

vFRAME replaces only the enclosing <DIV> and the result is homogeneousHTML text.

vFRAME is written in native JavaScript and does not have further dependencies.

vFRAME is tested with latest Firefox, Safari, Opera and Chrome.

vFRAME is intentionally plain JS code without modern JS dev crap! It has no
minified version, if you need one, you are free to make one :) If you do not
like this, there are countless other JS "frameworks" and "revolutionary" libs.

vFRAME is licensed under GPLv2, for full text see file "COPYING".

#  AUTHOR

    Vladi Belperchinov-Shabanski "Cade"
    <cade@bis.bg> <cade@cpan.org> <shabanski@gmail.com>
    https://github.com/cade-vs
    https://github.com/cade-vs/js-vframe
    github repo: git@github.com:cade-vs/js-vframe.git
