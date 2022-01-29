<?
// σύνδεση με τη βάση
$db=@new mysqli('localhost','spiros','1234','dbspurou');
if ($db->connect_error)
{
    $errortext.='<p class="error">Database error try later.</p>';
    $step='error';
}
else
{
    $db->set_charset("utf8");
    $dbconnected=true;
}
?>