package utils;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Arquivo
{
    public static void writerFile(String conteudo, String nomeArquivo) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(nomeArquivo, true))) {
            writer.newLine();
            writer.write(conteudo);
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    public static List<String> readerFile(String nomeArquivo) {
        List<String> result = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(nomeArquivo))) {
            reader.lines().forEach(result::add);
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        return result;
    }

}