#!/usr/bin/perl
use strict;
use MIME::Base64;
use CGI;

my $text = CGI::param( 'text' );
   
my $fh      = CGI::upload('fff');

$/ = undef;

print "Content-type: text/html\n\n<h2>$text $text $text</h2>" if ! $fh;
print "Content-type: text/html\n\n<img src='data:image/gif;base64," . MIME::Base64::encode_base64( <$fh>, '' ) . "'>" if $fh;


