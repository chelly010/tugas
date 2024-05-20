# PR

# ---------5++++++9--------12+++++30----------
MasukanUser = int(input("masukan bilangan 5 sampai 9 dan lebih dari 12 sampai 30 : "))
print(MasukanUser)

# Cek Lebih Dari 5
lebDar = (MasukanUser >= 5)
print ("Lebih dari 5 : ", lebDar)

#Cek kurang Dari 9
kurDar = (MasukanUser <= 9)
print ("Lebih dari 9 : ", kurDar)

#Cek Lebih Dari 12
lebhDar = (MasukanUser >= 12)
print ("Lebih dari 12 : ", lebhDar)

#Cek Kurang Dari 30 
kurnDar = (MasukanUser <= 30)
print("kurang Dari 30 : ", kurDar)

print("Maka 1 sampai 4 itu salah 5 sampai 9 itu benar 10 sampai 11 itu salah 12 sampai 30 itu benar : ", kurDar and lebDar or lebhDar and kurnDar)
