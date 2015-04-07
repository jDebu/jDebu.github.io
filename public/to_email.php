<?php
error_reporting(0);
if(!isset($_POST['submit'])) {
  //no envia aun
  $respuesta="";
  header('Location: page.php');
}
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

if (empty($nombre) || empty($email) || empty($mensaje)) {
  $respuesta="El nombre, email y mensaje se deben ingresar";
  header('Location: page.php');
}
$email_from ="j2delgadob@gmail.com";
$email_subject = "Formulario web";
$email_body="Ha recibido un mensaje de $nombre.\n".
            "email:$email\n".
            "Su mensaje fue:$mensaje";

$to ="j2delgadob@gmail.com";
$headers ="From: $email_from \n";

mail($to,$email_subject,$email_body,$headers);
$respuesta="mensaje enviado";
echo $respuesta;

header('Location: page.php#contact');

?>