<?php

class ApiClient
{
    private static string $baseUrl = 'http://localhost:3000';

    // Método central — todos os outros chamam ele
    private static function request(string $method, string $endpoint, array $body = []): array
    {
        $ch = curl_init(self::$baseUrl . $endpoint);

        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST  => $method,
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json', 'Accept: application/json'],
        ]);

        // Só anexa body se não for GET
        if (!empty($body)) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
        }

        $response = curl_exec($ch);
        $status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        //Caso o sistema der algum erro de Api
        if (!$response || $status >= 400) {
            throw new Exception("Erro na API. Status: {$status} | Resposta: " . /*Mostra os dados validos da variavel*/var_export($response, true));
        }  

        return json_decode($response, true) ?? [];
    }

    // Métodos públicos — apenas 1 linha cada
    public static function get(string $endpoint): array
    {
        return self::request('GET', $endpoint);
    }

    public static function post(string $endpoint, array $body): array
    {
        return self::request('POST', $endpoint, $body);
    }

    public static function put(string $endpoint, array $body): array
    {
        return self::request('PUT', $endpoint, $body);
    }

    public static function delete(string $endpoint): array
    {
        return self::request('DELETE', $endpoint);
    }
}