package com.example.demo.Service;


import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepo;
import com.example.demo.util.ResponseList;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;



    public String saveUser(UserDTO userDTO) {

        if (userRepo.existsById(userDTO.getEmpID())) {
            // Converts UserDTO to User entity and saves it to the database
            return ResponseList.RSP_DUPLICATED;
        }else {
            userRepo.save(modelMapper.map(userDTO, User.class));
            return ResponseList.RSP_SUCCESS;
        }
    }

    public List<UserDTO> getAllEmployee() {
        // Fetches all User entities from the repository
        List<User> userList = userRepo.findAll();

        // Converts the List<User> to List<UserDTO> using ModelMapper
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>() {
        }.getType());
    };

    public String updateUser(UserDTO userDTO) {

        if (userRepo.existsById(userDTO.getEmpID())) {
            userRepo.save(modelMapper.map(userDTO, User.class));
            return ResponseList.RSP_SUCCESS;
        }else {
            return ResponseList.RSP_NO_DATA_FOUND;
        }
    }


    public String deleteUser(int empID)
    {
        if (userRepo.existsById(empID)) {
            userRepo.deleteById(empID);
            return ResponseList.RSP_SUCCESS;
        }else {
            return ResponseList.RSP_NO_DATA_FOUND;
        }
    }

    public UserDTO searchUser(int empID)
    {
        if (userRepo.existsById(empID))
        {
            User user = userRepo.findById(empID).orElse(null);
            return modelMapper.map(user,UserDTO.class);
        }else {
            return null;
        }
    }

}
