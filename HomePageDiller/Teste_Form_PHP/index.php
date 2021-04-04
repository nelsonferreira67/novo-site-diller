<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf8">
        <title>Contato</title>
    </head>
    <body>
        <form action="mail_send.php" method="post">
            <fieldset>
                <label for="email">E-mail: </label>
                <input required name="email" type="email">
            </fieldset>
            <fieldset>
                <label for="mensagem">Mensagem: </label>
                <textarea required name="mensagem"></textarea>
            </fieldset>
            <fieldset>
                <button type="submit">Enviar</button>
            </fieldset>
        </form>
    </body>
</html>