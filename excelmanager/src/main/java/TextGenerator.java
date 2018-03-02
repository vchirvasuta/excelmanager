import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.*;
import java.util.Iterator;

public class TextGenerator {
    private static final String FILE_NAME = "C:\\DEV\\Temp\\pt24103.xlsx";
    private static final String OUTPUT_COPY_FILE = "C:\\DEV\\Temp\\copy.txt";
    private static final String OUTPUT_DELETE_FILE = "C:\\DEV\\Temp\\delete.txt";
    private static final String ACTION_DELETE = "DELETE";
    private static final String ACTION_MOVE = "MOVE";
    private static final String ACTION_MOVE_AND_COPY = "MOVE AND COPY";


    public static void main(String[] args) {

        try {

            FileInputStream excelFile = new FileInputStream(new File(FILE_NAME));
            Workbook workbook = new XSSFWorkbook(excelFile);
            Sheet datatypeSheet = workbook.getSheetAt(2);
            Iterator<Row> iterator = datatypeSheet.iterator();
            String currentPath;
            String copyPath;
            String fieldToCopy;
            String fieldToDelete;

            //init files

            while (iterator.hasNext()) {
                Row currentRow = iterator.next();
                Cell actionCell = currentRow.getCell(0);
                if (actionCell.getStringCellValue().equals(ACTION_MOVE)) {
                    //manage move
                    currentPath = currentRow.getCell(1).getStringCellValue();
                    copyPath = currentRow.getCell(2).getStringCellValue();
                    fieldToCopy =  "fields[\"" + currentPath + "\"] = \"" + copyPath + "\";\n";
                    appendToFile(OUTPUT_COPY_FILE, fieldToCopy);

                    //manage delete
                    appendFieldToDelete(currentPath);

                } else if (actionCell.getStringCellValue().equals(ACTION_MOVE_AND_COPY)) {
                    //manage move
                    currentPath = currentRow.getCell(1).getStringCellValue();
                    copyPath = currentRow.getCell(2).getStringCellValue();
                    fieldToCopy =  "fields[\"" + currentPath + "\"] = \"" + copyPath + "\";\n";
                    appendToFile(OUTPUT_COPY_FILE, fieldToCopy);
                    //manage copy
                    if (currentRow.getCell(3) != null) {
                        copyPath = currentRow.getCell(3).getStringCellValue();
                        if (copyPath.contains("\n")) {
                            copyPath = copyPath.substring(0, copyPath.indexOf("\n"));
                        }
                        fieldToCopy =  "fields[\"" + currentPath + "\"] = \"" + copyPath + " \";\n";
                        appendToFile(OUTPUT_COPY_FILE, fieldToCopy);
                    }
                    //manage delete
                    appendFieldToDelete(currentPath);

                } else if (actionCell.getStringCellValue().equals(ACTION_DELETE)) {
                    //manage delete
                    currentPath = currentRow.getCell(1).getStringCellValue();
                    appendFieldToDelete(currentPath);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void appendFieldToDelete(String currentPath) {
        String fieldToDelete;
        fieldToDelete = "fields_to_unset[\"" + currentPath + "\"]= \"\";\n";
        appendToFile(OUTPUT_DELETE_FILE, fieldToDelete);
    }


    private static void appendToFile(String filePath, String line) {
        BufferedWriter bw = null;
        FileWriter fw = null;
        try {
            fw = new FileWriter(filePath, true);
            bw = new BufferedWriter(fw);
            bw.write(line);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (bw != null)
                    bw.close();
                if (fw != null)
                    fw.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }
}
