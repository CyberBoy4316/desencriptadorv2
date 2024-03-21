import java.util.Scanner;

public class TextEncryptor {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese el texto:");
        String inputText = scanner.nextLine();

        String encryptedText = encryptText(inputText);
        System.out.println("Texto encriptado: " + encryptedText);

        String decryptedText = decryptText(encryptedText);
        System.out.println("Texto desencriptado: " + decryptedText);

        scanner.close();
    }

    private static String encryptText(String text) {
        return text.replaceAll("e", "enter")
                   .replaceAll("i", "imes")
                   .replaceAll("a", "ai")
                   .replaceAll("o", "ober")
                   .replaceAll("u", "ufat");
    }

    private static String decryptText(String text) {
        return text.replaceAll("enter", "e")
                   .replaceAll("imes", "i")
                   .replaceAll("ai", "a")
                   .replaceAll("ober", "o")
                   .replaceAll("ufat", "u");
    }
}
