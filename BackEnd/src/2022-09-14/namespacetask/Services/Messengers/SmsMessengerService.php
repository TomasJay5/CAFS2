<?php

namespace Services\Messengers;

class SmsMessengerService implements Send
{
    public function send($receiver, $text)
    {
        echo sprintf("\"%s\" %s", $text, $receiver);
    }
}
